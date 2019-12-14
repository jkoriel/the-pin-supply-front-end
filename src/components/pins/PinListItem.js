import React from 'react'
import { Button, Icon, Item, Container } from 'semantic-ui-react'


const PinListItem = ({ pin }) => (
    <Container>
        <Item.Group >
            <Item >
                <Item.Image size="small" style={{ marginBottom: "20px" }} src={pin.picture}></Item.Image>
                <Item.Content style={{ marginTop: "25px" }}>
                    <Item.Header style={{ marginBottom: "10px" }}>{pin.name}</Item.Header>
                    <Item.Meta>
                        {pin.price}
                    </Item.Meta>
                    <Item.Content>{pin.description}</Item.Content>
                    <Button inverted floated='right'>
                        Buy Now
            <Icon name='right chevron' />
                    </Button>

                </Item.Content>
            </Item>
        </Item.Group>
    </Container>
)

export default PinListItem
