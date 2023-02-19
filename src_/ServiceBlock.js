export default function ServiceBlock(props) {
    return (
        <div className="agency-service-block flex">
        <img src={props.block.imgURL} alt={props.block.service} />
        <p>{props.block.service}</p>
        {/* <img src={props.imgURL} alt={props.service} />
        <p>{props.service}</p> */}
        </div>
    );
}
  