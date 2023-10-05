import { ColorRing } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderWrapper>
      <ColorRing />
    </LoaderWrapper>
  );
}