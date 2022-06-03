import axios from "axios"
import { useContext, useEffect, useState } from "react"
 
import "./Belt.css"
import { Slider } from "./Slider"
import { Button, Drawer, Dropdown, Menu } from "antd"
import { SingleProduct } from "./SingleProduct"
import { SingleWallet } from "./SingleWallet"
export const Wallet=()=>{
    const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState('left');
    const [data,setdata]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/wallet").then((res)=>{
            console.log(res.data)
            setdata(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    const showDrawer = () => {
        setVisible(true);
      };
    
      const onClose = () => {
        setVisible(false);
      };
    

      const  Featured = (
        <div style={{marginTop:"2rem"}}>
             <Menu
           items={[
               {
                   key: '1',
                   label: (
                   <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                   Best Sellers
                   </a>
                   ),
               },
               {
                   key: '2',
                   label: (
                   <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                       New Arrivals
                   </a>
                   ),
               },{
                 key: '6',
                 label: (
                 <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                   Summer Accessories
                 </a>
                 ),
             },{
                 key: '7',
                 label: (
                 <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                   Lightweight Goods
                 </a>
                 ),
             },
               ]}
         />
        </div>
       );
    return (
        <div >
            <div>
                
                <Drawer  title="Basic Drawer"
                    placement={placement}
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                    key={placement}>
                        
                    </Drawer>
                 </div>
                 <Slider/>
                <Button onClick={showDrawer}>Filter</Button>
                <p>{data.length}</p>
                <Dropdown overlay={Featured}>
                    <Button>Features</Button>
                </Dropdown>
                
            <div className="container">
                {data.map((el)=>(
                    <SingleWallet key={el.id} {...el}/>
                ))}
            </div>
        </div>
    )
}