// React & Semantic-UI Imports
import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// Local Imports
import HorizontalBarChart from './HorizontalBarChart';

// TODO UPDATE DYNAMIC DATA FROM DATABASE

// Data for Event Counts chart
const countdata = {
    labels: ['Bot', 'Malware', 'Phising', 'Spam', 'Target'],
    datasets: [
        {
            label: 'Event Counts',
            data: [0, 7, 82, 5, 0],
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

// Data for Event Scores chart
const scoredata = {
    labels: ['Bot', 'Malware', 'Phising', 'Spam', 'Target'],
    datasets: [
        {
            label: 'Event Scores',
            data: [0, .7429, .7243, .8417, 0],
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

// Card styling
const cardStyle = {
    width: "100%"
};
const innerCardStyle = {
    width: "100%"
};

const AsnCard = () => (
    <Card style={cardStyle}>
        <Card.Content>
            <Card.Header>ASN #</Card.Header>
            <Card.Meta>
                <span className='date'>Total Events: #</span>
            </Card.Meta>
            <Card.Description>

               {/* TODO: DELETE AFTER TESTING
               <HorizontalBarChart title={'Event Counts'} data={countdata} />
               <br></br><br></br>
               <HorizontalBarChart title={'Event Scores'} data={scoredata} /> */}

                {/* Insert inner cards here (ASN metadata + charts) */}

                <Card.Group>
                    <Card style={innerCardStyle}>
                        <Card.Content>
                            <Card.Header>ASN Metadata Statistics</Card.Header>
                            <Card.Meta>ASN # {17504}</Card.Meta>
                            <Card.Description>
                                Total IPs #    :
                                <strong>
                            <br></br>Total Events # :
                            <br></br>Abnormal IP %  :
                            <br></br>Countries #    :
                            <br></br>Countries List :
                            <br></br>....
                            </strong>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            ??
                        </Card.Content>
                    </Card>
                    <Card style={innerCardStyle}>
                        <Card.Content>
                            <Card.Header>Frequency Malicous Events</Card.Header>
                            <Card.Meta>ASN # {17504}</Card.Meta>
                            <Card.Description>
                                Frequency counts of each malicious event type from ASN
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <HorizontalBarChart title={'Event Counts'} data={countdata} />
                        </Card.Content>
                    </Card>
                    <Card style={innerCardStyle}>
                        <Card.Content>
                            <Card.Header>Malicous Event Scores</Card.Header>
                            <Card.Meta>ASN # {17504}</Card.Meta>
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

export default AsnCard