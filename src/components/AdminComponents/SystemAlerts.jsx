const SystemAlerts = ({alerts}) => {
  console.log(alerts);
  return(
  <div style={{ marginBottom: 24 }} className="alerts-card">
    {alerts.map((val,key)=>{
      return(
        <>
      <p>{val.message}  Severity:{val.severity}</p>
        </>
      )
    })}
  </div>
)};
export default SystemAlerts;