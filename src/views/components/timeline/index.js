// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Demo Components

import IconsTimeline from './IconsTimeline'


const Timeline = () => {
  return (
    <Fragment>
      <Row>
        <Col lg='12'>
          <IconsTimeline />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Timeline
