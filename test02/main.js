const tbody = document.querySelector("tbody")
fetch(`https://63e9cf1be0ac9368d6449b9d.mockapi.io/menu`)
.then((response)=>response.json())
    .then((data)=>{
        showdata(data)
        const btnxoa = document.querySelectorAll("#btn-xoa")
        for(let btn of btnxoa){
            const id = btn.dataset.id;
            btn.addEventListener("click",function(){
                return removeUser(id)
            })
        }

        const btnsua = document.querySelectorAll("#btn-sua")
        for(let btns of btnsua){
            const id = btns.dataset.id;
            btns.addEventListener("click",()=>{
                return edit(id);
            })
        }
    })

const showdata = (data)=>{
    tbody.innerHTML = `
    ${data.map((user,index)=>{
        return `
    <tr>
        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>
            <button data-id="${user.id}" id="btn-xoa">xóa</button>
            <button data-id="${user.id}" id="btn-sua">sửa</button>
        </td>
    </tr>
        `
    }).join("")}
    `
}
const add = ()=>{
    document.querySelector('body').innerHTML = `
    <form action="" id="form">
    <div><label for="">name</label></div>
    <div><input type="text" name="" id="input"></div>
    <button>add</button>
    </form>
    `
    const form = document.querySelector("#form")
    const input = document.querySelector("#input")
    form.addEventListener("submit",(e)=>{
        e.preventDefault()

        const newmenu = {
            name:input.value
        }

        fetch(`https://63e9cf1be0ac9368d6449b9d.mockapi.io/menu`,{
            method : "post",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(newmenu)
            
        })
        

    })

}
document.querySelector("#btn-add").addEventListener("click",add)


const edit = (id)=>{
    fetch(`https://63e9cf1be0ac9368d6449b9d.mockapi.io/menu/${id}`)
    .then((response)=>response.json())
    .then((data)=>{
    document.querySelector('body').innerHTML = `
    <form action="" id="form">
    <div><label for="">name</label></div>
    <div><input type="text" value="${data.name}" id="input"></div>
    <button>sửa</button>
    </form>
    `

    const form = document.querySelector("#form")
    const input = document.querySelector("#input")
    form.addEventListener("submit",(e)=>{
        e.preventDefault()

        const newmenu = {
            name:input.value
        }

        fetch(`https://63e9cf1be0ac9368d6449b9d.mockapi.io/menu/${id}`,{
            method : "put",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(newmenu)
        })

    })
    })
}
document.querySelector("#btn-sua").addEventListener("click",edit)


// const xoa = (id)=>{
//     fetch(`https://63e9cf1be0ac9368d6449b9d.mockapi.io/menu/${id}`,{
//         method:"DELETE"
//     })
// }

const removeUser = (id) => {
    fetch(`https://63e9cf1be0ac9368d6449b9d.mockapi.io/menu/${id}`,{
        method:"DELETE"
    })
}