#[cfg(test)]
mod tests {
    fn solution(num: i32) -> i32 {
        let mut result: i32 = 0;

        for x in 3..num {
            if (x % 3 == 0) || (x % 5 == 0) {
                result += x;
            }
        }

        return result;
    }

    #[test]
    fn returns_expected() {
        assert_eq!(solution(10), 23);
        assert_eq!(solution(11), 33);
        assert_eq!(solution(6), 8);
    }
}
