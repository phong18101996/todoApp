import axios from 'axios'

export const getList = () => {
    return axios
    .get('/tasks',{
        headers:{'Content-Type':'application/json'}
    })
    .then(res => {
        return res.data
    })
}

export const addItem = title => {
    return axios
    .post('/task',{
        title:title
    },
    {
        headers:{'Content-Type':'application/json'}
    }
    )
    .then(res => {
        console.log(res)
    })
}

export const deleteItem = id => {
    axios.delete('/tasks/${id}',{
        headers:{'Content-Type':'application/json'}
    })
    .then(res => {
        console.log(res)
    })
    .catch(err =>{
        console.log(err)
    })
}

export const updateItem = (title,id) => {
    return axios
    .put ('/tasks/${id}',{
        title:title
    },{
        headers:{'Content-Type':'application/json'}
    })
    .then(res => {
        console.log(res)
    })
    .catch(err =>{
        console.log(err)
    })
}