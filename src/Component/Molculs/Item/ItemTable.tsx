import React, { useState } from 'react'
import { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addBudgetItem, editItem, setBudget, removeBudgetItem, initialState, fiscalYear } from '../../slice/itemSlice';
import { BUDGET } from '../../../Types';
import { TrashIcon } from '../../../HeloIcons';

const ItemTable = () => {

  const { editedItem, budget } = useAppSelector((state: RootState) => state.item);
  const dispatch = useAppDispatch();

  
// const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     console.log(name)
//     const fiscalYear = parseInt(name); // nameを数値に変換
//     console.log(fiscalYear)
  
//     // 新しいbudgetを生成し、該当する年度のデータを更新
//     const newBudget = editedItem.budget.map((item) => {
//       if (item.fiscalYear === fiscalYear) {
//         // 更新する対象の年度が一致した場合、新しい値をセットする
//         return {
//           ...item,
//           investForHard: value === '' ? null : parseFloat(value),
//         };
//       }
//       return item;
//     });
  
//     // editedItemオブジェクト内のbudgetプロパティも更新
//     const updatedEditedItem = {
//       ...editedItem,
//       budget: newBudget as typeof editedItem.budget,
//     };
  
//     dispatch(editItem(updatedEditedItem));
//   };
  

//追加行をする際のfiscalYearの定義
const maxFiscalYear = Math.max(...budget.map((item) => item.fiscalYear))
const nextFiscalYear = maxFiscalYear + 1

const handleAddRow = () => {
    const newId = budget.length + 1;
    // const nextYear = budget.map((each) => {
    //     each.fiscalYear + 1
    // })
    const newRow : BUDGET= {
        budgetId: newId,
        item: editedItem.itemId,
        fiscalYear: nextFiscalYear,
        investForHard: null,
        investForSoft: null,
        investTotal: null,
        expenses: null,
        total: null,
        budgetStatus: 1,
    };
    //行を追加
    dispatch(addBudgetItem({budgetItem: newRow}))

    console.log(budget);
  };

  const handleDeleteRow = () => {
      if (budget.length > 0) {
          const lastBudgetItem = budget[budget.length - 1];
          
          if (lastBudgetItem.budgetStatus === 1) {
              // budgetStatus が 1 の場合、削除
              dispatch(removeBudgetItem(lastBudgetItem.budgetId));
            } else if (lastBudgetItem.budgetStatus === 0) {
                // budgetStatus が 0 の場合、budgetStatus を 2 に変更
                const updatedBudgetItem = { ...lastBudgetItem, budgetStatus: 2 };
                const updatedBudget = [...budget.slice(0, -1), updatedBudgetItem];
                dispatch(setBudget(updatedBudget));
            }
        }
    };

    
    
    // const handleDeleteRow = () => {
    // if (budget.length > 0) {
    //     const lastBudgetId = budget[budget.length - 1].budgetId;
    //     dispatch(removeBudgetItem(lastBudgetId));
    //   }
  // budgetが1行の場合、削除ボタンのクリック処理を無効にする
//   if (budget.length > 1) {
//     dispatch(removeBudgetItem(budgetId));
//     }
// };
console.log(budget)




const handleValueChange = (id: number, field: string, value: any) => {

    //e.target.valueは文字列として取得されるため、入力された値を数字に変換する処理を行う
    const numericValue = parseFloat(value);


    //数値に変換できた場合のみ、ステータスを更新
    if (!isNaN(numericValue) || value === "" ){
    // 数値に変換できない場合は明示的にnullに設定
    const newValue = isNaN(numericValue) ? null : numericValue;


        // Update the value in the tableData state
        const updatedData = budget.map(item => {
         
            if (item.budgetId === id) {
              return { ...item, [field]: newValue };
            }
            return item;
          });

              // 新しい investTotal の計算
            const updatedBudget = updatedData.map(item => {
                const investForHard = item.investForHard || 0; // null の場合は 0 として扱う
                const investForSoft = item.investForSoft || 0; // null の場合は 0 として扱う
                const expenses = item.expenses || 0; // null の場合は 0 として扱う
                const investTotal = investForHard + investForSoft ;
                const total = investForHard + investForSoft + expenses;
                
                return { ...item, investTotal, total };
            });

          dispatch(setBudget(updatedBudget));
          console.log(budget)
        };

    }
//   const handleDeleteRow = (id) => {
//     const updatedData = tableData.filter(item => item.id !== id);
//     setTableData(updatedData);
//   };



  return (
    <>
      <div className="overflow-x-auto mt-1 w-full overflow-y-auto h-56">
        <label className='label-text'>
            ♦経費・投資額詳細
            <span className="label-text-alt text-accent">＊</span>
            <div className='max-h-[300px] max-w-[600px]'>
              <table className="table table-xs border w-full">
              <thead className='bg-neutral-100 text-center border'>
                  <tr >
                  <th className=' border-r'>年度</th> 
                  <th className=' border-r'>投資：ﾊｰﾄﾞ</th> 
                  <th className=' border-r'>投資：ｿﾌﾄ</th> 
                  <th className=' border-r'>経費</th> 
                  <th >合計</th> 
                  </tr>
              </thead> 
              <tbody className=' text-center'>
                {/* {budget.map((each, index) => {
                    return(
                        <>
                            <tr key={index}>
                                <th className=' border-r'>
                                    <h3>{each.fiscalYear}</h3>
                                </th> 
                            </tr>
                            <td>
                                <input 
                                    type="text" 
                                    name = "2024" 
                                    placeholder={"半角数字"} 
                                    // value = {i.investForHard === null ? '' : i.investForHard} 
                                    // onChange = {handleInputChange} 
                                    className="input input-bordered input-xs  w-16 text-right" 
                                />
                            </td>
                        </>
                    )
                })} */}
                {budget.map(({budgetId, fiscalYear, investForHard, investForSoft, expenses}, index) => (
                <tr key={index}>
                    <th className=' border-r'>
                        <h3>{fiscalYear}</h3>
                    </th> 
                    <td>
                        <input 
                            type="text" 
                            name = "investForHard" 
                            placeholder={"半角数字"} 
                            value = {investForHard === null ? '' : investForHard} 
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleValueChange(budgetId, 'investForHard', e.target.value)}
                            className="input input-bordered input-xs  w-16 text-right" 
                        />
                    </td>
                    <td>
                        <input 
                            type="text" 
                            name = "investForSoft" 
                            placeholder={"半角数字"} 
                            value = {investForSoft === null ? '' : investForSoft} 
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleValueChange(budgetId, 'investForSoft', e.target.value)}
                            className="input input-bordered input-xs  w-16 text-right" 
                        />
                    </td>
                    <td>
                        <input 
                            type="text" 
                            name = "expenses" 
                            placeholder={"半角数字"} 
                            value = {expenses === null ? '' : expenses} 
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleValueChange(budgetId, 'expenses', e.target.value)}
                            className="input input-bordered input-xs  w-16 text-right" 
                        />
                    </td>
                    <td>
                        <p>{(investForHard=== null ? 0 : investForHard) + (investForSoft=== null ? 0 : investForSoft) + (expenses=== null ? 0 : expenses)}</p>

                    </td>
                    {/* <td className="border px-2 py-1">
                    <button
                        className=" text-red-500 disabled:text-gray-400"
                        onClick={() => handleDeleteRow(budgetId)}
                        // budgetが1行の場合、削除ボタンをクリックしても何もしない
                        disabled={budget.length <= 1}
                    >
                    <TrashIcon />
                    </button>
                    </td> */}

                </tr>
                ))}

                </tbody> 
                </table>
            </div>


        </label>
        </div>     
        <div className='mt-1'>
            <button
                className=" btn btn-xs btn-primary mx-1"
                onClick={() => handleAddRow()}
                >
                Add Row
            </button>
            <button
                className=" btn btn-xs btn-secondary mx-1"
                onClick={() => handleDeleteRow()}
                disabled= {budget.length === 1}
                >
                delete row
            </button>
        </div>         
    </>
  )
}

export default ItemTable