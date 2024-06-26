import axios from "axios";
import { defineStore } from "pinia";
const url = "https://fakestoreapi.com/products"


export const useProductApp = defineStore('productStore', {
    state: ()=>{
        return{
            products:[]
        }
    },
    getters: {

    },
    actions:{
            getProducts(){
                axios.get(url)
                .then((res)=>{
                    this.products = res.data.products
                    console.log(res);
                })
                .catch((err)=>{
                    console.log(err);
                })
            }
    }
})