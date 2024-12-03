import React, {useState} from 'react';
import './App.css';

function BookChapterData(){
    const [items,setItems] = useState([]);
    const [newItem, setNewItem] = useState({number:0, title:'', pages:0});
    const [editItemId, setEditItemId] = useState(null);
    const [editItem, setEditItem] = useState({number:0, title:'', pages:0});

    const addItem = () =>{
        setItems([...items, {...newItem, id:Date.now()}]);
        setNewItem({number:0,title:'',pages:0});
    };

    const deleteItem = (id) =>{
        setItems(items.filter(item => item.id !== id));
    };

    const startEditItem = (item) => {
        setEditItemId(item.id);
        setEditItem(item);
    };

    const updateItem = () =>{
        setItems(items.map(item => item.id === editItemId ? editItem : item));
        setEditItemId(null);
        setEditItem({number:0,title:'',pages:0});
    };

    return(
        <div className='BookChapter'>
            <h1>Book Chapter</h1>

            <h2>Add Item</h2>
            <input type="text"
            value={newItem.number}
            onChange={(e)=> setNewItem({...newItem,number:e.target.value})}
            placeholder='number'/>

            <input type="text"
            value={newItem.title}
            onChange={(e)=> setNewItem({...newItem,title:e.target.value})}
            placeholder='title'/>

            <input type="text"
            value={newItem.pages}
            onChange={(e)=> setNewItem({...newItem,pages:e.target.value})}
            placeholder='number'/>

            <button onClick={addItem}>Add</button>

            <h2>Items</h2>
            <table className="table table-bordered table-sm">
                    <thead className="thead-dark">
                        <tr>
                        <th className="text-center">Name</th>
                        <th className="text-center">Title</th>
                        <th className="text-center">Pages</th>
                        <th className="text-center small-wdth"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => {
                        return <tr key={item.id}>
                        <td className="text-center">{item.number}</td>
                        <td className="text-center">{item.title}</td>
                        <td className="text-center">{item.pages}</td>
                        <td className="text-center small-width">
                            <input type="button" className="btn btn-primary" value="Edit" id="btnEdit" onClick={() => startEditItem(item)}/>
                            &nbsp;
                            <input type="button" className="btn btn-secondary" value="Delete" id="btnDelete" onClick={() => deleteItem(item.id)}/>
                        </td>
                        </tr>
                        })}
                    </tbody>
                </table>

                {editItemId !== null && (
                    <div>
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                                <th className="text-left" colspan="2">Edit Item</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center">
                                        <label className="font-weight-bold">Number:</label>
                                    </td>
                                    <td className="text-center">
                                        <input type="text" 
                                        value={editItem.number}
                                        onChange={(e) => setEditItem({...editItem, number:e.target.value})}
                                        placeholder='number'
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">
                                        <label className="font-weight-bold">Title:</label>                
                                    </td>
                                    <td className="text-center">
                                        <input type="text" 
                                        value={editItem.title}
                                        onChange={(e) => setEditItem({...editItem, title:e.target.value})}
                                        placeholder='title'
                                        />                
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">
                                        <label className="font-weight-bold">Pages:</label>                
                                    </td>
                                    <td className="text-center">
                                        <input type="text"
                                        value={editItem.pages}
                                        onChange={(e) => setEditItem({...editItem, pages: e.target.value})}
                                        />                
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center" colspan="2">
                                        <input type="submit" className="btn btn-primary" value="Update" id="btnEdit" onClick={updateItem}/>
                                        &nbsp;
                                        <input type="button" className="btn btn-secondary" value="Cancel" id="btnCancelEdit" onClick={() => setEditItem(null)}/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>    
                )}
        </div>
    );    
}

export default BookChapterData;