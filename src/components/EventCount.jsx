import tableStyle from "./Table.module.css";

const FormatEventCount = ({event}) => (
    <div className={tableStyle.firstCol}>
        <span style={{ fontWeight: 'bold' }}>{event.C}</span> {event.T} {event.N}
    </div>
);
export default FormatEventCount
