import React from "react";
import './loading.style.css';
import { usePromiseTracker } from "react-promise-tracker";
import {Oval} from 'react-loader-spinner';

const LoadingIndicator = props => {
       const { promiseInProgress } = usePromiseTracker();
    
       return (
         promiseInProgress && 
         <div className="loading-component">
         <Oval color="#00BFFF" height={80} width={80} />
         </div>
      );  
     }

     export default LoadingIndicator;