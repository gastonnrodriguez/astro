import dotenv from 'dotenv';
dotenv.config();
import {encodedCredentials} from './utils';


 interface gqlParams{
    query: string;
    variables?:object
 }  
 
 
 export async function wpquery({query, variables={}}:gqlParams) {

const credentials = encodedCredentials(process.env.APP_USER,process.env.APP_PASSWORD);

const response = await fetch('https://dialogopolitico.org/graphql',{
        method: 'post',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Basic ${credentials}`
        },
        body: JSON.stringify({
            query,
            variables
        })
    });

    if(!response.ok){
        console.log(response);
        return {};
    }

    const {data} = await response.json();
    return data;
 }
