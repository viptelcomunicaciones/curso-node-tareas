import fs from 'fs';
import { json } from 'stream/consumers';

const file = './db/data.json';

export const SaveBD = ( data ) =>{
    fs.writeFileSync( file, JSON.stringify(data));
}

export const ReadBD = () =>{
    if ( !fs.existsSync(file)){
        return null;
    }
    const info = fs.readFileSync(file,{encoding:'utf-8'});
    const data = JSON.parse(info);
    // console.log(data);
    return data;
}
