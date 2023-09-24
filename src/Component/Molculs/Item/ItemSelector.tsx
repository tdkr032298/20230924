import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { RADIO } from '../../../Types';
import { editItem } from '../../slice/itemSlice';

const ItemSelector = () => {

  const { editedItem } = useAppSelector((state: RootState) => state.item);
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    console.log({...editedItem})
    switch ( name )  {
      case "priority": dispatch(editItem({...editedItem, priority: value}));
            break;
            case "newScheme": dispatch(editItem({...editedItem, newScheme: !editedItem.newScheme}));
            break;
            case "deliberation": dispatch(editItem({...editedItem, deliberation: !editedItem.deliberation}));
            break;
            case "investPurpose": dispatch(editItem({...editedItem, investPurpose: value}));
            break;
            case "emergency": dispatch(editItem({...editedItem, emergency: value}));
            break;
            case "investmentEfficiency": dispatch(editItem({...editedItem, investmentEfficiency: value}));
            break;
            case "digitalize": dispatch(editItem({...editedItem, digitalize: !editedItem.digitalize}));
            break;
            case "transFormation": dispatch(editItem({...editedItem, transFormation: !editedItem.transFormation}));
            break;
            case "workStyleReform": dispatch(editItem({...editedItem, workStyleReform: !editedItem.workStyleReform}));
            break;
            case "tmcSync": dispatch(editItem({...editedItem, tmcSync: !editedItem.tmcSync}));
            break;
            case "tyUnique": dispatch(editItem({...editedItem, tyUnique: !editedItem.tyUnique}));
            break;
            case "policy": dispatch(editItem({...editedItem, policy: value}));
            break;
            // case "investReason": dispatch(editItem({...editedItem, investReason: value}));
            // break;
    }
  }
      //ラジオボタンの項目
      const lankRadioButton: RADIO[] = [
        {
          label: "S",
          value: "S",
        },
        {
          label: "A",
          value: "A",
        },
        {
          label: "B",
          value: "B",
        },
        {
          label: "C",
          value: "C",
        },
      ]
  

  return (
        <div className='w-full mx-3'>
            <div>
              <label className="label-text flex whitespace-nowrap ">
                <span>♦優先順位　　 &nbsp;</span>
                {lankRadioButton.map(radio => {
                  return(

                  <div className="flex items-center">
                    <label className="cursor-pointer flex items-center">
                        <span className="label-text px-1">{radio.label}</span> 
                        <input 
                          type="radio" 
                          name = "priority" 
                          value={radio.value} 
                          checked={radio.value === editedItem.priority}  
                          onChange={handleInputChange}
                          className="radio checked:bg-dark" />
                    </label>
                  </div>
                  )
                })}
                
              </label>
              <label className="label-text flex  ">
                ♦新スキーム　 &nbsp;
                <input type="checkbox" name = "newScheme" checked={editedItem.newScheme} onChange={handleInputChange} className="checkbox checkbox-neutral" />                      
              </label>
              <label className="label-text flex  ">
                ♦審議会　　　 &nbsp;
                <input type="checkbox" name = "deliberation" checked={editedItem.deliberation} onChange={handleInputChange} className="checkbox checkbox-neutral" />                      
              </label>
              <label className="label-text flex whitespace-nowrap ">
                <span>♦投資目的　　 &nbsp;</span>
                {lankRadioButton.map(radio => {
                  return(

                  <div className="flex items-center">
                    <label className="cursor-pointer flex items-center">
                        <span className="label-text px-1">{radio.label}</span> 
                        <input type="radio" name = "investPurpose" value={radio.value} checked={radio.value === editedItem.investPurpose} onChange={handleInputChange} className="radio checked:bg-dark" />
                    </label>
                  </div>
                  )
                })}
              </label>
              <label className="label-text flex  ">
                ♦緊急度　　　 &nbsp;
                {lankRadioButton.map(radio => {
                  return(

                  <div className="flex items-center">
                    <label className="cursor-pointer flex items-center">
                        <span className="label-text px-1">{radio.label}</span> 
                        <input type="radio" name = "emergency" value={radio.value} checked={radio.value === editedItem.emergency} onChange={handleInputChange} className="radio checked:bg-dark" />
                    </label>
                  </div>
                  )
                })}
              </label>
              <label className="label-text flex whitespace-nowrap  ">
                <span>♦投資効率　　 &nbsp;</span>
                {lankRadioButton.map(radio => {
                  return(

                  <div className="flex items-center">
                    <label className="cursor-pointer flex items-center">
                        <span className="label-text px-1">{radio.label}</span> 
                        <input type="radio" name = "investmentEfficiency" value={radio.value} checked={radio.value === editedItem.investmentEfficiency} onChange={handleInputChange} className="radio checked:bg-dark" />
                    </label>
                  </div>
                  )
                })}
              </label>
              <label className="label-text flex  ">
                ♦デジタル化　 &nbsp;
                <input type="checkbox" name = "digitalize" checked={editedItem.digitalize} onChange={handleInputChange} className="checkbox checkbox-neutral" />                      
              </label>
              <label className="label-text flex  ">
                ♦変革的改善　 &nbsp;
                <input type="checkbox" name = "transformation" checked={editedItem.transFormation} onChange={handleInputChange} className="checkbox checkbox-neutral" />                      
              </label>
              <label className="label-text flex  ">
                ♦働き方改革　 &nbsp;
                <input type="checkbox" name = "workStyleReform" checked={editedItem.workStyleReform} onChange={handleInputChange} className="checkbox checkbox-neutral" />                      
              </label>
              <label className="label-text flex  ">
                ♦ＴＭＣ同期　 &nbsp;
                <input type="checkbox" name = "tmcSync" checked={editedItem.tmcSync} onChange={handleInputChange} className="checkbox checkbox-neutral" />                      
              </label>
              <label className="label-text flex  ">
                ♦ＴＹ独自　　 &nbsp;
                <input type="checkbox" name = "tyUnique" checked={editedItem.tyUnique} onChange={handleInputChange} className="checkbox checkbox-neutral" />                      
              </label>
              <label className="label-text ">
                ♦方針軸でのグループ化   &nbsp;
                <input type="text" name = "policy" placeholder={"入力"} value = {editedItem.policy} onChange={handleInputChange} className="input input-bordered input-xs  w-40" />
              </label>
              <label className="label-text flex  ">
                ♦分類　　　　 &nbsp;
                {lankRadioButton.map(radio => {
                  return(

                  <div className="flex items-center">
                    <label className="cursor-pointer flex items-center">
                        <span className="label-text px-1">{radio.label}</span> 
                        <input type="radio" name = "investReason" value={radio.value} checked={radio.value === editedItem.investReason} onChange={handleInputChange} className="radio checked:bg-dark" />
                    </label>
                  </div>
                  )
                })}
              </label>
            
            </div>

                  
        </div>
  )
}

export default ItemSelector