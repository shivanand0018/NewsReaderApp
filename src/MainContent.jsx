import { React, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Pagination from '@mui/material/Pagination';
import './MainContent.css'

const MainContent = (props) => {

    return (
        <div>
            {props.Content.articles.map((item, i) =>
                <div id='div'>
                    <Card id='Card'>
                        <img src={item.urlToImage} />
                        <CardHeader title={item.title}></CardHeader>
                        <CardContent>{item.description}</CardContent>
                    </Card>
                </div>
            )}

        </div>
    )
}

export default MainContent