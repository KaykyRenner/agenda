class ListaDecontato{
    constructor(){
        this.formulario = document.querySelector('.formulario')
        this.tbody = document.querySelector('.corpo')
        this.nome = document.querySelector('.nome')
        this.contato = document.querySelector('.contato')
        this.evento()
    }
    evento(){
        this.formulario.addEventListener('submit', e=>{
            this.hundleSubmit(e)
            
        })
    }
    hundleSubmit(e){
        e.preventDefault()
        const nome = this.nome.value
        const contato = this.contato.value
        this.creatTr(nome,contato)
        this.formulario.reset()
    }
    creatTd(text){
        const td = document.createElement('td')
        td.innerHTML = text
        return td
    }
    creatTr(nome,ctt){
        const tr = document.createElement('tr')
        const tdNome = this.creatTd(nome)
        const tdContato = this.creatTd(ctt)
        tr.appendChild(tdNome)
        tr.appendChild(tdContato)
        this.tbody.appendChild(tr)
    }
}
const lista = new ListaDecontato()