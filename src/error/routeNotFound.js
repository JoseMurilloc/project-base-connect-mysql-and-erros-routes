export default function (_, res, ___) {
  const erro = new Error("Route not found");
  return res.status(404).json({
    message: erro.message
  });
}