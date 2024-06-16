public interface IPrestamoService
{
    Task<PrestamoDTO> Get(int id);
    Task<IEnumerable<PrestamoDTO>> GetAll();
    Task<PrestamoDTO> Add(PrestamoCreacionDTO prestamoCreacionDTO);
    Task<PrestamoDTO> GiveBack(int id);
}