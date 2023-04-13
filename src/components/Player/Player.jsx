import Iframe from 'react-iframe';

const Player = ({ title }) => {
  return (
    <>
      <Iframe
        url={`https://v1681339303.bazon.site/embed?search=${title}`}
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"
      />
    </>
  );
};

export default Player;
