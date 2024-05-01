import { Button, Modal } from 'antd';
import { FC, useState } from 'react';
import styled from 'styled-components';
import { useWindowSize } from 'usehooks-ts';
import Maps from '../maps';

export type MapPosition = {
  lat: number;
  lng: number;
};

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  handleOk: (newPosition: MapPosition) => void;
}

const DEFAULT_MAPS_LOCATION = {
  longitude: 106.8601215,
  latitude: -6.125320399999999,
};

const MapModal: FC<Props> = (props) => {
  const { isOpen, handleClose, handleOk } = props;
  const isMobile = useWindowSize().width < 1024;
  const CENTER = {
    lat: DEFAULT_MAPS_LOCATION.latitude,
    lng: DEFAULT_MAPS_LOCATION.longitude,
  };
  const [position, setPosition] = useState(CENTER);

  return (
    <Modal
      title="Pilih Lokasi"
      open={isOpen}
      onOk={() => handleOk(position)}
      onCancel={() => handleClose()}
      width={isMobile ? '100%' : 968}
      style={{ height: '100%' }}
      footer={[
        <Button
          key="back"
          type="default"
          className="border-[1px] border-solid border-[#D9D9D9]"
          onClick={() => handleClose()}
        >
          Batal
        </Button>,
        <Button
          key="ok"
          type="primary"
          style={{ backgroundColor: '#1890FF' }}
          onClick={() => handleOk(position)}
        >
          Ok
        </Button>,
      ]}
    >
      <div className="bg-[#F0F0F0] h-[1px] mx-[-24px]" />

      <StyledMapWrapper>
        <Maps position={position} setPosition={setPosition} />
      </StyledMapWrapper>

      <div className="bg-[#F0F0F0] h-[1px] mx-[-24px]" />
    </Modal>
  );
};

export default MapModal;

const StyledMapWrapper = styled.div`
  width: 100%;
  height: 28rem;
  border-radius: 0.625rem;

  .map {
    height: 28rem !important;
  }
`;
