
import {getSuggestions, debounce} from './utils.js'

const inputBox = document.getElementById('search-input');
const suggestionBox = document.getElementById('suggestions-wrapper');

const resetState = () =>{
    suggestionBox.classList.remove('suggestions-visible')
    renderDropDownItems([])
}

const renderDropDownItems = (list = []) =>{
    const suggFragment = document.createDocumentFragment();
    list.forEach(item=>{
        const el = document.createElement('div');
        el.innerHTML = item;
        el.setAttribute('data-key', item)
        suggFragment.appendChild(el)
    })
    suggestionBox.innerHTML=''
    suggestionBox.appendChild(suggFragment)
}

const handleSearch = async(keyword)=>{
    const result = await getSuggestions(keyword);
    if(result.length){
        suggestionBox.classList.add('suggestions-visible');
        renderDropDownItems(result)
    }
}

const handleInputChange = (event)=>{
    const value = event.target.value;
    if(value){
    handleSearch(value)
    } else{
        resetState()
    }
}

const handleSelect = (event) =>{
    const {key} = event.target.dataset;
    if(key){
        inputBox.value = key;
        resetState()
    }
}

(()=>{
    inputBox.addEventListener('input', debounce(handleInputChange, 500));
    suggestionBox.addEventListener('click', handleSelect)
})()
