import { useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import GalaxyTeam from "../Frontend/Cards";
import RichTextComponent from "../../utils/RichText";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />
        <GalaxyTeam
          attributes={attributes}
          RichTextComponent={RichTextComponent}
          setAttributes={setAttributes}
        />
      </div>
    </>
  );
};
export default Edit;
