import React from 'react'
import"./carmarketplace.scss"
import Image from '../Carmarket/Image/Image'
import Content from '../Carmarket/Content/Content'
import Status from "../Carmarket/Status/Status"
import {CrosarowIcon } from '../../Res/icons'
const Carmarketplace = () => {
    const content = {
        title: "Online, in-person,\n everywhere",
        description: "Choose from thousands of vehicles from multiple brands and buy online with Click\n& Drive, or visit us at one of our dealerships today.",
        buttonText: "Get Started",
        icon: <CrosarowIcon />
    }
    const statsData = [
        { value: "836M", label: "Cars for Sale" },
        { value: "738M", label: "Dealer Reviews" },
        { value: "100M", label: "Visitors per Day" },
        { value: "238M", label: "Verified Dealers" },
    ]
  
    return (
        <div className="carmarketplace__container">
            <div className="carmarketing">
                <div className="card__data">
                <Image image="images/marketplaceimage.png" alt="marketplaceimage" />
                <Content title={content.title}
                    description={content.description}
                    buttonText={content.buttonText}
                    icon={content.icon}
                     />
                    </div>
                <Status stats={statsData} />
            </div>

        </div>


    )
}

export default Carmarketplace