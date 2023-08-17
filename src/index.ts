import { Base } from "./base";
import { Hadiths } from "./hadiths";
import { applyMixins } from "./utils";

class Hadith extends Base {}
interface Hadith extends Hadiths {}

applyMixins(Hadith, [Hadiths]);

export default Hadith