export default function ErrorPage() {
  return <p>Sorry, something went wrong</p>;
}

// import { useRouter } from "next/router";
// import { Container, Typography, Button, Box } from "@mui/material";

// export default function ErrorPage() {
//   const router = useRouter();
//   const { message } = router.query;

//   return (
//     <Container maxWidth="sm">
//       <Box textAlign="center" mt={5}>
//         <Typography variant="h4" color="error" gutterBottom>
//           Error
//         </Typography>
//         <Typography variant="body1" gutterBottom>
//           {message || "An unexpected error occurred."}
//         </Typography>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => router.push("/")}
//         >
//           Go back to Login
//         </Button>
//       </Box>
//     </Container>
//   );
// }
