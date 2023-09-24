import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { editItem } from '../../slice/itemSlice';

const ItemFile = () => {

  const { editedItem } = useAppSelector((state: RootState) => state.item);
  const dispatch = useAppDispatch();

  return (
    <div>
       <div>
          <input 
            type="file" 
            onChange={(e)=> {
              const files = e.target.files
                  // ファイルがなければ終了
                  if (!files || files?.length === 0) return;
                  // 先頭のファイルを取得
                  const file = files[0];
                  console.log(file)
                  console.log(editedItem.file)
                  dispatch(editItem({...editedItem, file: file.name}));
                  editedItem.file = file.name
                  console.log(editedItem.file)
            }}
            className="file-input file-input-bordered w-xs" />
          <a href='#'>{editedItem.file}</a>
        </div>

    </div>
  )
}

export default ItemFile