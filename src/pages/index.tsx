import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);
  
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="container mx-auto">
        {/* Card Start */}
        <div className="flex flex-1">
          <div className="h-40 aspect-square">Tumbnail</div>
          <div className="flex flex-col w-full">
            <div className="flex w-full justify-between">
              <div>Title</div>
              <div>Price</div>
            </div>
            <div>Description</div>
            <div className="flex w-full justify-between">
              <div>Category</div>
              <div>Ratings</div>
            </div>
          </div>
        </div>
        {/* Card End */}
      </div>
    </div>
  );
}
