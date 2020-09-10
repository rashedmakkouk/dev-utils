function keyExtractor(key: string | number, index: number): string {
  return `${key}-${index}`;
}

export default keyExtractor;
