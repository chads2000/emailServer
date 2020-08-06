export function getBoolean(value: any): boolean {
  if (!!value) {
    switch (value) {
      case true:
        return true;
    }
    switch (value.toString().toLowerCase()) {
      case 'true':
      case '1':
      case 'on':
      case 'yes':
        return true;
    }
    switch (parseInt(value.toString(), 10)) {
      case 1:
        return true;
    }
  }
  return false;
}
