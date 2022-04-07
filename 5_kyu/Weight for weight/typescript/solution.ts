export function orderWeight(strng: string): string {
  // Remove leading, trailing spaces & double spaces
  let clean_string: string = strng
    .replace(/^\s+|\s+$/gm, "")
    .replace(/\s+/gm, " ");

  let split_string: string[] = clean_string.split(" ");

  // Calculate the weight value of each number
  let split_string_weight: number[] = [];
  for (var i = 0; i < split_string.length; i++) {
    let weight: number = 0;
    let value: number = Number(split_string[i]);
    while (value >= 1) {
      weight += Math.floor(value) % 10;
      value = value / 10;
    }
    split_string_weight.push(weight);
  }

  // Order the weights in ascending order
  let ordered_weights: number[] = split_string_weight
    .slice()
    .sort(function (a, b) {
      return a - b;
    });

  let ordered_split_string: string[] = [];
  // Create an array holding 'used' state of string
  let used_strings: boolean[] = [];
  for (var i = 0; i < split_string_weight.length; i++) {
    used_strings.push(false);
  }

  // Order strings according to their weights
  for (var i = 0; i < ordered_weights.length; i++) {
    for (var j = 0; j < split_string_weight.length; j++) {
      if (!used_strings[j] && split_string_weight[j] == ordered_weights[i]) {
        ordered_split_string.push(split_string[j]);
        // Mark string as used
        used_strings[j] = true;
      }
    }
  }

  // Handle duplicate values
  let result: string = "";
  for (var i = 0; i < ordered_weights.length; i++) {
    let start_index = ordered_weights.indexOf(ordered_weights[i]);
    let end_index = ordered_weights.lastIndexOf(ordered_weights[i]);
    // Find duplicates, sort them alphabetically and add them to result
    if (start_index != end_index) {
      let sub_string = ordered_split_string
        .slice(start_index, end_index + 1)
        .sort();
      for (var j = 0; j < sub_string.length; j++) {
        result = result.concat(sub_string[j], " ");
      }
      i += sub_string.length - 1;
      // If no duplicates, add to result
    } else {
      result = result.concat(ordered_split_string[i], " ");
    }
  }

  // Remove leading & trailing spaces
  result = result.replace(/^\s+|\s+$/gm, "");

  console.log("Raw: ", strng);
  console.log("Sorted: ", result);
  console.log("-----------------------------");
  return result;
}
