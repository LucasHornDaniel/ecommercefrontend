import React, {useState, useEffect} from "react";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Card from "./Card";

const Chekout = ({products}) => {
    return <div>{JSON.stringify(products)}</div>;
};


export default Chekout;