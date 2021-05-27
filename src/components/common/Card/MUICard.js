import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '@material-ui/core'

function MUICard({
    title,
    ...props
}) {
    return (
        <Card>
            {props.children}
        </Card>
    )
}

MUICard.propTypes = {
    title:PropTypes.string
}

export default MUICard

