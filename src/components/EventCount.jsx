const FormatEventCount = ({event}) => (
    <div className="event-detail">
        <span style={{ fontWeight: 'bold' }}>{event.C}</span> {event.T} {event.N}
    </div>
);
export default FormatEventCount
