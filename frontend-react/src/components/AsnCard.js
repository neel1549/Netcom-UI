// React & Semantic-UI Imports
import React from 'react';
import { Card, Icon,Alert } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// Local Imports
import HorizontalBarChart from './HorizontalBarChart';

// TODO UPDATE DYNAMIC DATA FROM DATABASE



// Data for Event Scores chart

// Card styling
const cardStyle = {
    width: "100%",
    opacity:0.9
};
const innerCardStyle = {
    width: "100%"
};

const AsnCard = (props) => {
    
    let header= props.ip? "IP":"ASN";
    let data=props.data[Object.keys(props.data)[0]]
    console.log(data)
    const scoredata = {
        labels: ['Bot', 'Fraud', 'Phising', 'Spam', 'Attack'],
        datasets: [
            {
                label: 'Event Scores',
                data: [data.Event_Score_Bot, data.Event_Score_Fraud, data.Event_Score_Phish, data.Event_Score_Spam, data.Event_Score_Attack],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }
    
    // Data for Event Counts chart
const countdata = {
    labels: ['Bot', 'Fraud', 'Phising', 'Spam', 'Attack'],
    datasets: [
        {
            label: 'Event Counts',
            data: [data.Event_Count_Bot, data.Event_Count_Fraud, data.Event_Count_Phish, data.Event_Count_Spam, data.Event_Count_Attack],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
}
    
    return(
    <Card style={cardStyle}>
        <Card.Content>
            <Card.Header>{header} Cards</Card.Header>
            <Card.Meta>
                <span className='date'>Total Events: #</span>
            </Card.Meta>
            <Card.Description>

                <Card.Group>
                <Card style={innerCardStyle}>
                        <Card.Content>
                            <Card.Header>{header} Metadata Statistics</Card.Header>
                            <Card.Meta>{"ASN"} # {Object.keys(props.data)[0]}</Card.Meta>
                            <Card.Description>
                                The entered IP correlates to an ASN of {Object.keys(props.data)[0]}
                            </Card.Description>
                        </Card.Content>
                       
                    </Card>
                    <Card style={innerCardStyle}>
                        <Card.Content>
                            <Card.Header>{header} Metadata Statistics</Card.Header>
                            <Card.Meta>{"ASN"} # {Object.keys(props.data)[0]}</Card.Meta>
                            <Card.Description>
                                
                                <strong>
                                Total IPs #    : {data.Total_IP_Count}
                            <br></br>Total Events # : {data.Total_Event_Count}
                            <br></br>Abnormal IP %  :{data.IP_ASN_Changes_Percent}
                            <br></br>Countries #    :{data.Total_Country_Count.length}
                            <br></br>Countries List :{data.Total_Country_Count.join(", ")}
                            </strong>
                            </Card.Description>
                        </Card.Content>
                       
                    </Card>
                    <Card style={innerCardStyle}>
                        <Card.Content>
                            <Card.Header>Frequency Malicous Events</Card.Header>
                            <Card.Meta>{"ASN"} # {Object.keys(props.data)[0]}</Card.Meta>
                            <Card.Description>
                                Frequency counts of each malicious event type from {header}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <HorizontalBarChart title={'Event Counts'} data={countdata} />
                        </Card.Content>
                    </Card>
                    <Card style={innerCardStyle}>
                        <Card.Content>
                            <Card.Header>Malicous Event Scores</Card.Header>
                            <Card.Meta>{"ASN"} # {Object.keys(props.data)[0]}</Card.Meta>
                            <Card.Description>
                                Malicious scores calculated from Symantic's Hostility, Confidence, & Reputation
                                classification, grouped by event type. Scores of 1, means all events in group
                                have the highest hositlity score, with the greatest confidence score, with the 
                                most poor-repuation score. Scores of 0.5 signify that only half of event scores
                                have the highest hositlity, confidence, and repuation score.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <HorizontalBarChart title={'Event Scores'} data={scoredata} />
                        </Card.Content>
                    </Card>
                </Card.Group>
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user' />
                # IP Addresses
            </a>
        </Card.Content>
    </Card>
    )
}

export default AsnCard