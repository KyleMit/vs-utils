export const pluralize = (count:Number, noun:String) => `${count} ${noun}${(count !== 1 ? "s" : "")}`;
