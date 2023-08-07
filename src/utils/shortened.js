export default function shortened(str) {
    return str?.slice(0, 6) + "..." + str?.slice(str.length - 4);
}