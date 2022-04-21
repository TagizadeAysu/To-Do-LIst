const form=document.querySelector('form')
        function adding(){
            const label=document.createElement('label')
            form.append(label)
            label.classList.add('list-item')
            const input=document.createElement('input')
            label.append(input)
            input.classList.add('list-item-input')
            const btn_delete=document.createElement('button')
            label.append(btn_delete)
            btn_delete.classList.add("fa-regular")
            btn_delete.classList.add("fa-circle-xmark")
            btn_delete.type="button"
        };
    
        
        document.querySelector('.add-button').addEventListener('click',()=>{
            adding();
            delete_item();
        });

        let delete_item =()=>{
            let deleteform = document.querySelector("form")
            deleteform.querySelectorAll('button').forEach(item=>{
                item.addEventListener('click', event => {
                    event.preventDefault();
                    if(document.querySelectorAll('button').length>1)
                        item.parentElement.remove()
                    });
            });
        };
    
        
        let toggle=true;
        document.querySelector('.sort').addEventListener('click',(event)=>{
            const inputform=document.querySelector("form")
            const todoArray=new Array;
            inputform.querySelectorAll('.list-item-input').forEach(item=>{
                if(item.classList.contains('repeatsort')){
                    todoArray.push(item.innerHTML)
                }else{
                todoArray.push(item.value)
                }
            });
            const sort=document.querySelector('i')
            if(toggle)
                if (sort.classList.contains('fa-sort-amount-down-alt')) {
                    sort.classList.remove('fa-sort-amount-down-alt')
                    sort.classList.add('fa-sort-amount-up-alt')
                }
            else
                if (sort.classList.contains('fa-sort-amount-up-alt')) {
                    sort.classList.remove('fa-sort-amount-up-alt');
                    sort.classList.add('fa-sort-amount-down-alt');
                }
            toggle= !toggle;
            todoArray.sort((a,b) => {
                if(isNaN( Number(a) )) {
                    if(a > b) return 1;
                    if(a == b) return 0;
                    if(a < b) return -1;
                } else return a - b;
            });
            if(toggle) todoArray.reverse();
            form.innerHTML = ''
            todoArray.forEach(element => {
                form.innerHTML+=`<label class="list-item"><p class="list-item-input repeatsort" >${element}</p ><button class="fa-regular fa-circle-xmark" type="button"></button></label>`
            })
            delete_item();    
        })