import React from 'react';
import { X } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { changeState } from '@/redux/stateSlice';
import { Input } from './ui/input';
import { Button } from './ui/button';
const AddFriendModel = () => {
  const dispatch = useDispatch();

  const handleCloseModel = () => {
    return dispatch(changeState(false));
  };

  return (
    <section className='h-screen fixed inset-0 bg-slate-900/30 flex items-center justify-center'>
      <div className='max-w-lg w-full bg-white flex flex-col p-5 round shadow-xl'>
        <div className='flex items-center justify-between px-4 font-medium mb-4'>
          <h3>Thêm bạn</h3>
          <X onClick={handleCloseModel} />
        </div>
        <hr />
        <form action='' className='flex gap-2'>
          <Input className='' placeholder='phone number' />
          <Button variant={'outline'} type='button'>
            Tìm
          </Button>
        </form>
      </div>
    </section>
  );
};
export default AddFriendModel;
