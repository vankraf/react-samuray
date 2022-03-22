import React from 'react';
import './index.css';
import {rerenderEntrieTree} from "./render";
import state from "./redux/state";

rerenderEntrieTree(state);
