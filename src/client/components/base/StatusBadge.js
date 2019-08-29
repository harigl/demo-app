import React from 'react'
import { Badge } from 'reactstrap'

const StatusBadge = ({ status }) => {
  const color = { Completed: 'success', Deferred: 'danger', Inprogress: 'warning' }
  return <Badge color={color[status] || 'warning'}>{status}</Badge>
}

export default StatusBadge
