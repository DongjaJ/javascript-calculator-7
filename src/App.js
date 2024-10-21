import { Console } from "@woowacourse/mission-utils";
import Validator from "./Validator.js";
import {
  INPUT_QUERY,
  OUTPUT_PREFIX,
  INITIAL_SEPARATOR_LIST,
} from "./constants.js";

class App {
  #input;
  #separatorList = [...INITIAL_SEPARATOR_LIST];
  #inputNumberList = [];

  async run() {
    await this.#readInput();

    const validator = new Validator(this.#input, this.#separatorList);
    validator.parse();

    this.#generateInputNumberList();
    this.#printResult();
  }

  async #readInput() {
    this.#input = await Console.readLineAsync(INPUT_QUERY);
  }

  #generateInputNumberList() {
    this.#inputNumberList = this.#input.match(/[0-9]+/g).map(Number);
  }

  #getTotalSum() {
    return this.#inputNumberList.reduce((acc, current) => acc + current);
  }

  #printResult() {
    Console.print(this.#getFormattedResult());
  }

  #getFormattedResult() {
    return `${OUTPUT_PREFIX}${this.#getTotalSum()}`;
  }
}

export default App;
