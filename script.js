//script.js
//import company from 'configuration'
//mport year from 'configuration'

import {company} from './configuration.js'
import {year} from './configuration.js' 

const message = 'c'  + company + year
console.log(message);
document.querySelector('footer').innertext = message