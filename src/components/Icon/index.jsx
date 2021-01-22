import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const CustomIcon = styled(FontAwesomeIcon)`
  color: #868995;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.4s ease-in-out;

  &:hover {
    color: #3d3f45;
    transform: translateY(-2px);
  }
`;

export default function Icon({ icon, count, ...props }) {
  return (
    <>
      {count ? (
        <div className="cart">
          <CustomIcon icon={icon} {...props} />
          {count > 0 && <span>{count}</span>}
        </div>
      ) : (
        <CustomIcon icon={icon} {...props} />
      )}
    </>
  );
}
