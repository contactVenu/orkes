import React, { useEffect} from 'react';
import axios from 'axios';
import { useMachine } from '@xstate/react';
import { dataMachine } from '../components/dataMachine';

const ScrollContainer = () => {
    const [state, send] = useMachine(dataMachine);

    const getData = (page) => {
        if (page <= 3) {
            axios.get(`http://localhost:5000/page${page}`)
                .then(res => {
                    send({ type: 'ADD_DATA', value: res.data.nodes })
                })
                .catch(err => console.log(err))
        }
    }

    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 1;
        if (bottom) {
            send({ type: 'CHANGE_PAGE' })
        }
    }

    useEffect(() => {
        getData(state.context.currentPage)
    }, [state.context.currentPage])

    return (
        <div className='vh-100 w-100 d-flex flex-column align-items-center overflow-auto' onScroll={handleScroll}>
            {state.context.data.length
                && state.context.data.map((item, index) => <div key={index} className='w-50 my-4 d-flex flex-md-row flex-sm-column align-items-center'>
                    <div className='w-50'>
                        <img src={item.node.field_photo_image_section} alt='' className='w-100' style={{ borderRadius: "30px" }} />
                    </div>
                    <div className='w-50 px-4'>
                        <h4 className='lh-sm'>
                            {item.node.title}
                        </h4>
                        <span className='h5 text-muted'>{`${Date(item.node.last_update).toString().slice(4, 15)} ${new Date(item.node.last_update).toLocaleString('en-US').split(',')[1]} IST `}</span>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ScrollContainer;
