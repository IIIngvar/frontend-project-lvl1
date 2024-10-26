#!/usr/bin/env node

import { userName } from "../cli.js";
import { brainEven } from "./brain-even.js";

console.log('Welcome to the Brain Games!');

const nameOfUser = userName();

brainEven(nameOfUser);