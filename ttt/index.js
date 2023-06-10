const tbody = document.querySelector("tbody")
fetch(`https://63e9cf1be0ac9368d6449b9d.mockapi.io/menu`)
.then((response)=>response.json())
.then((data)=>{
    showdata(data)
})




const showdata = (data)=>{
    tbody.innerHTML=`
    ${data.map((user,index)=>{
        return`
     
    <tr>
        <td>${index +1}</td>
        <td>${user.name}</td>
        <td>
            <button data-id="${user.id}" class="btn-xoa">xoa</button>
            <button data-id="${user.id}" class="btn-sua">sua</button>
        
        </td>
    </tr>
    `
    }).join("")}

    `
       
}
const adds = ()=>{
   document.querySelector('body').innerHTML=`
    <form action="" id="from-add">
        <label for="">Name</label>
        <input type="text" id="inputss">
        <button>them</button>
    </form>
   `
    const form = document.querySelector("#form-add")
    const name = document.querySelector("#inputss")

    form.addEventListener("submit",(e)=>{
        e.preventDefault()
        
        const newadd={
            name:name.value
        }
        fetch(`https://63e9cf1be0ac9368d6449b9d.mockapi.io/menu`,{
            method:"post",
            headers:{
                "content-Type":"application/json"
            },
            body:JSON.stringify(newadd)
            
        })
    })

}
document.querySelector("#btn-add").addEventListener("click",adds)

const dele=()=>{

}

const updates=()=>{

}