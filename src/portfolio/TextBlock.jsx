export default function TextBlock(props) {
  return (
    <div className="text_block gallery_item">
      <h2 className="text_block_h">{props.header}</h2>
      <p className="text_block_p">{props.text}</p>
    </div>
  );
}
