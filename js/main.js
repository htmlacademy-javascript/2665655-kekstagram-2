import { createPhotos } from './create-photos';
import './thumbails';
import { renderMiniatures } from './thumbails';

const photos = createPhotos();
renderMiniatures(photos);
